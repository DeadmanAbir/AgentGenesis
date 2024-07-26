import { NextResponse } from 'next/server';

const mdxContent = `
  <table>
  <thead>
    <tr>
      <th>Field Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>Tower Research Capital</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Founded in 1998 by Mark Gorton, Tower Research Capital is a trading and technology company that has built some of the fastest, most sophisticated electronic trading platforms in the world.</td>
    </tr>
    <tr>
      <td>Locations</td>
      <td>
        * NEW YORK, NY<br>
        * New York, NY<br>
        * HQ: US, NY, NEW YORK<br>
        * Founded: 1998
      </td>
    </tr>
    <tr>
      <td>Head</td>
      <td>
        * 501-1000 employees<br>
        * 139,491 followers
      </td>
    </tr>
    <tr>
      <td>Stats</td>
      <td>
        * Industry: Financial Services
        * Website: http://www.tower-research.com/
        * Crunchbase Profile: https://www.crunchbase.com/organization/tower-research-capital-llc
        * Phone: 12122196075
      </td>
    </tr>
    <tr>
      <td>Similar Companies</td>
      <td>
        * Citadel Securities<br>
        * Two Sigma<br>
        * Cubist Systematic Strategies<br>
        * Akuna Capital<br>
        * Old Mission<br>
        * Belvedere Trading, LLC<br>
        * Hudson River Trading<br>
        * Flow Traders<br>
        * Maven Securities<br>
        * DRW<br>
        * Optiver<br>
        * G-Research
      </td>
    </tr>
    <tr>
      <td>Accomplishments</td>
      <td>
        * Built some of the fastest, most sophisticated electronic trading platforms in the world.<br>
        * Recognized for contributions to building a Machine Learning Lab for Social Good by IIT Bombay.<br>
        * Participated in J.P. Morgan Corporate Challenge.<br>
        * Co-hosted an event on AI for finance professionals.<br>
        * Participated in Cycle for Survival events raising funds for rare cancer research.<br>
        * Partnered with other firms to host the Women in Quant Finance Conference.
      </td>
    </tr>
    <tr>
      <td>Key Takeaways</td>
      <td>
        * Tower Research Capital is a leading trading and technology company with a strong focus on innovation and social responsibility.<br>
        * The company has a global presence with offices in the US, EMEA, and APAC.<br>
        * Tower Research Capital is actively involved in promoting diversity and inclusion in the finance industry.
      </td>
    </tr>
    <tr>
      <td>Suggestions</td>
      <td>
        * Explore opportunities to collaborate with Tower Research Capital on projects related to financial technology and social impact.<br>
        * Follow their LinkedIn page for updates on their latest innovations and initiatives.<br>
        * Consider attending their events and conferences to learn more about the company and the quant finance industry.
      </td>
    </tr>
  </tbody>
</table>
`;

export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json({ content: mdxContent }, { status: 200 });
}
