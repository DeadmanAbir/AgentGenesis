'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';

// Function to find tables in the text
const findTables = (text: string): string[][][] => {
  const tables: string[][][] = [];
  let table: string[][] | null = null;
  let isTable = false;
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    let row: RegExpMatchArray | null = null;
    if ((row = line.match(/^\|(.*)\|$/))) {
      if (!isTable) {
        isTable = true;
        table = []; // new table
      }
      table?.push(row[1].split('|').map((cell) => cell.trim()));
    } else {
      if (isTable && table) {
        tables.push(table);
      }
      isTable = false;
    }
  }
  if (isTable && table) {
    tables.push(table);
  }
  return tables;
};

// Function to check if a row is a header separator
const isHeaderBreak = (row: string[]): boolean =>
  row.reduce((acc, e) => acc && !!e.trim().match(/^-+$/), true);

// Function to generate HTML rows
const makeRow = (rawRow: string[]): string => {
  const data = rawRow.reduce((acc, e) => `${acc}<td>${e.trim()}</td>`, '');
  const row = `<tr>${data}</tr>\n`;
  return row;
};

// Function to generate HTML tables
const makeTable = (table: string[][]): string => {
  let header = '';
  let body = '';
  let isHeader = true;
  for (let i = 0; i < table.length; i++) {
    if (isHeaderBreak(table[i])) {
      isHeader = false;
      continue;
    }
    if (isHeader) header += makeRow(table[i]);
    else body += makeRow(table[i]);
  }
  return `<table border="1">
  <thead>
  ${header}<thead>
  <tbody>
  ${body}</tbody>
  </table>`;
};

const LinkedinAgent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [tableHTML, setTableHTML] = useState<string>('');
  const [mdxContent, setMdxContent] = useState<string>('');
  useEffect(() => {
    const tables = findTables(mdxContent);
    if (tables.length > 0) {
      setTableHTML(makeTable(tables[0]));
    }
  }, [mdxContent]);

  const handleClick = async () => {
    if (!inputValue.trim()) {
      return;
    }

    setInputValue('');
    setLoading(true); // Start loading

    try {
      const response = await fetch('/api/agent');
      const data = await response.json();
      console.log(data, 'response');
      setMdxContent(data.content);
    } catch (e) {
      console.log('Error');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative h-[400px] border rounded-md shadow-md">
      <div className="overflow-y-auto h-[340px] p-4">
        {loading && (
          <div className="text-center text-gray-500">
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          </div>
        )}
        {tableHTML && <div dangerouslySetInnerHTML={{ __html: tableHTML }} />}
      </div>
      <div className="flex items-center absolute bottom-0 w-full p-1 bg-white">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter profile URL or Company URL..."
          className="flex-grow rounded-r-none focus-visible:ring-0"
        />
        <Button
          className="rounded-l-none"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </div>
  );
};

export default LinkedinAgent;
