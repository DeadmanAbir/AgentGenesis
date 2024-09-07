interface WikipediaCustomToolProps {
  topKResults?: number;
  baseUrl?: string;
}

interface WikipediaSearchResults {
  query: {
    search: Array<{
      title: string;
    }>;
  };
}

interface WikipediaPage {
  pageid: number;
  ns: number;
  title: string;
  extract: string;
}

interface WikipediaPageResult {
  batchcomplete: string;
  query: {
    pages: Record<string, WikipediaPage>;
  };
}

interface WikipediaCustomToolResponse {
  page: string;
  details: string;
}

export class WikipediaCustomTool {
  private topKResults: number;
  private baseUrl: string;

  constructor(params: WikipediaCustomToolProps) {
    this.topKResults = params.topKResults ?? 3; // Default to 3 if not provided
    this.baseUrl = params.baseUrl ?? 'https://en.wikipedia.org/w/api.php'; // Default Wikipedia English API URL if not provided
  }

  async search(query: string): Promise<WikipediaCustomToolResponse[] | string> {
    try {
      const searchResults = await this.fetchSearchResults(query);

      const results: WikipediaCustomToolResponse[] = [];

      for (
        let i = 0;
        i < Math.min(this.topKResults, searchResults.query.search.length);
        i++
      ) {
        const page = searchResults.query.search[i].title;
        const pageDetails = await this.fetchPage(page, true);

        if (pageDetails) {
          const data: WikipediaCustomToolResponse = {
            page,
            details: pageDetails.extract,
          };
          results.push(data);
        }
      }

      if (results.length === 0) {
        return 'No good Wikipedia Search Result was found';
      }
      return results;
    } catch (error) {
      console.error('Error during Wikipedia search:', error);
      return 'Error during Wikipedia search';
    }
  }

  private async fetchSearchResults(
    query: string,
  ): Promise<WikipediaSearchResults> {
    const searchParams = new URLSearchParams({
      action: 'query',
      list: 'search',
      srsearch: query,
      format: 'json',
    });

    const response = await fetch(`${this.baseUrl}?${searchParams.toString()}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json() as Promise<WikipediaSearchResults>;
  }

  private async fetchPage(
    page: string,
    redirect: boolean,
  ): Promise<WikipediaPage> {
    const params = new URLSearchParams({
      action: 'query',
      prop: 'extracts',
      explaintext: 'true',
      redirects: redirect ? '1' : '0',
      format: 'json',
      titles: page,
    });

    const response = await fetch(`${this.baseUrl}?${params.toString()}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: WikipediaPageResult = await response.json();
    const { pages } = data.query;
    const pageId = Object.keys(pages)[0];

    return pages[pageId];
  }
}
