import { NextRequest, NextResponse } from 'next/server';
import { LinkedinTool } from '@/utils/linkedinTool';
import { ChatOpenAI } from '@/utils/chatOpenAi';
import { z } from 'zod';
import { ChatGemini } from '@/utils/chatGemini';
import { ratelimit } from './core';

export const maxDuration = 300;

const requestBodyValidator = z.object({
  url: z.string().url(),
  type: z.enum(['profile', 'company']),
  apiKey: z.string(),
  proxyUrlKey: z.string(),
  model: z.enum(['gpt-4o', 'gemini-1.5-flash']),
});

const validateRequestBody = (body: any) => {
  return requestBodyValidator.parse(body);
};

const generateChatResponse = async (
  data: any,
  model: string,
  chatOpenAI: ChatOpenAI,
  chatGemini: ChatGemini,
  prompt: string,
  outputFormat: string,
) => {
  const content = JSON.stringify(data);

  if (model === 'gpt-4o') {
    return chatOpenAI.chat({
      prompt,
      context: content,
      outputFormat,
    });
  }

  return chatGemini.chat({
    prompt,
    context: content,
    outputFormat,
  });
};

const handleProfile = async (
  url: string,
  chatOpenAI: ChatOpenAI,
  chatGemini: ChatGemini,
  tool: LinkedinTool,
  model: string,
) => {
  const profileData = await tool.searchProfile(url);
  return generateChatResponse(
    profileData,
    model,
    chatOpenAI,
    chatGemini,
    `Giving you a data of a LinkedIn user profile. Analyze and give me a detailed summary of the profile in an HTML tabular format.`,
    profileOutputResponse,
  );
};

const handleCompany = async (
  url: string,
  chatOpenAI: ChatOpenAI,
  chatGemini: ChatGemini,
  tool: LinkedinTool,
  model: string,
) => {
  const companyData = await tool.searchCompany(url);
  return generateChatResponse(
    companyData,
    model,
    chatOpenAI,
    chatGemini,
    `Giving you a data of a LinkedIn company profile. Analyze and give me a detailed summary of the company in an HTML tabular format.`,
    companyOutputResponse,
  );
};

export async function POST(request: NextRequest) {
  let url = '';

  try {
    const body = await request.json();
    ({ url } = validateRequestBody(body));

    const { type, apiKey, proxyUrlKey, model } = validateRequestBody(body);

    const detectedIp =
      request.ip ||
      (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];

    const tool = new LinkedinTool({ apiKey: proxyUrlKey });
    const chatOpenAI = new ChatOpenAI({ apiKey, model: 'gpt-4o' });
    const chatGemini = new ChatGemini({ apiKey, model: 'gemini-1.5-flash' });

    let data;
    if (type === 'profile') {
      data = await handleProfile(url, chatOpenAI, chatGemini, tool, model);
    } else {
      data = await handleCompany(url, chatOpenAI, chatGemini, tool, model);
    }
    const { success, limit, reset, remaining } =
      await ratelimit.limit(detectedIp);
    if (!success) {
      const data = {
        limit,
        remaining,
        reset,
      };
      return NextResponse.json({
        success: false,
        status: 429,
        data,
      });
    }
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error(`Error in POST with URL ${url}:`, err);
    return NextResponse.json({
      success: false,
      status: 500,
      error: `Error processing URL ${url}: ${err.message}`,
    });
  }
}

const companyOutputResponse = `<table>
  <thead>
    <tr>
      <th>Field Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>"name of company + tagline if any"</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>"description of company if any"</td>
    </tr>
    <tr>
      <td>Locations</td>
      <td>
        * Loc 1<br>
        * Loc 2<br>
        ... if any<br>
        * HQ country + state + city<br>
        * founded year + date
      </td>
    </tr>
    <tr>
      <td>Head</td>
      <td>
        * company size<br>
        * company followers
      </td>
    </tr>
    <tr>
      <td>Stats</td>
      <td>
        * company 1<br>
        * company 2<br>
        ... if any
      </td>
    </tr>
    <tr>
      <td>Similar Companies</td>
      <td>
        * Acc 1<br>
        * Acc 2<br>
        * Acc 3... if any
      </td>
    </tr>
    <tr>
      <td>Accomplishments</td>
      <td>
        * key 1<br>
        * key 2<br>
        * key 3... if any
      </td>
    </tr>
    <tr>
      <td>Key Takeaways</td>
      <td>
        * Suggestion 1<br>
        * Suggestion 2<br>
        * Suggestion 3... if any
      </td>
    </tr>
    <tr>
      <td>Suggestions</td>
      <td>
        * Note 1<br>
        * Note 2<br>
        * Note 3... if any
      </td>
    </tr>
  </tbody>
</table>`;

const profileOutputResponse = `<table>
  <thead>
    <tr>
      <th>Field Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>"name of user if any"</td>
    </tr>
    <tr>
      <td>Occupation</td>
      <td>"occupation if any"</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>"city + state + full country name if any"</td>
    </tr>
    <tr>
      <td>Summary</td>
      <td>"summary of headline + occupation + summary if any"</td>
    </tr>
    <tr>
      <td>Experiences</td>
      <td>* Exp 1<br>* Exp 2<br>... if any</td>
    </tr>
    <tr>
      <td>Education</td>
      <td>* Edu 1<br>* Edu 2<br>... if any</td>
    </tr>
    <tr>
      <td>Statistics</td>
      <td>* follower count<br>* connection count<br>... if any</td>
    </tr>
    <tr>
      <td>Accomplishments</td>
      <td>* Acc 1<br>* Acc 2<br>... if any</td>
    </tr>
    <tr>
      <td>Key Takeaways</td>
      <td>* Key Takeaway 1<br>* Key Takeaway 2<br>... if any</td>
    </tr>
    <tr>
      <td>Suggestions</td>
      <td>* Suggestion 1<br>* Suggestion 2<br>... if any</td>
    </tr>
  </tbody>
</table>`;
