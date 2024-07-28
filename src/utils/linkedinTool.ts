interface LinkedinToolProps {
  apiKey: string;
}

export class LinkedinTool {
  private apiKey: string;

  constructor(props: LinkedinToolProps) {
    const { apiKey } = props;
    if (!apiKey || apiKey.length === 0) {
      throw new Error(
        'ProxyCurl requires an API key. Please set it as PROXYCURL_API_KEY in your .env file, AND pass it as a parameter to the LinkedinTool constructor.',
      );
    }
    this.apiKey = apiKey;
  }

  async searchProfile(profileUrl: string): Promise<Record<string, any>> {
    if (!this.isValidLinkedInUrl(profileUrl)) {
      throw new Error('Invalid LinkedIn profile URL');
    }

    const url = 'https://nubela.co/proxycurl/api/v2/linkedin';
    const params = new URLSearchParams({ url: profileUrl });

    const response = await this.fetchData(url, params);

    return this.formatData(response);
  }

  async searchCompany(companyUrl: string): Promise<Record<string, any>> {
    if (!this.isValidLinkedInUrl(companyUrl)) {
      throw new Error('Invalid LinkedIn company URL');
    }

    const apiEndpoint = 'https://nubela.co/proxycurl/api/linkedin/company';
    const params = new URLSearchParams({
      url: companyUrl,
      categories: 'include',
      funding_data: 'include',
      exit_data: 'include',
      acquisitions: 'include',
      extra: 'include',
      use_cache: 'if-present',
      fallback_to_cache: 'on-error',
    });

    const response = await this.fetchData(apiEndpoint, params);

    return this.formatData(response);
  }

  private async fetchData(url: string, params: URLSearchParams) {
    const response = await fetch(`${url}?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from LinkedIn API. Status: ${response.status}`,
      );
    }

    return await response.json();
  }

  private formatData(data: Record<string, any>): Record<string, any> {
    function cleanEmptyKeys(obj: Record<string, any>) {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          if (
            obj[key] === null ||
            obj[key] === undefined ||
            obj[key] === '' ||
            (typeof obj[key] === 'object' &&
              Object.keys(obj[key]).length === 0) ||
            (Array.isArray(obj[key]) && obj[key].length === 0)
          ) {
            delete obj[key];
          } else if (typeof obj[key] === 'string') {
            obj[key] = obj[key].replace(/[\n+\\]/g, '').trim();
          } else if (Array.isArray(obj[key])) {
            obj[key].forEach((item) => {
              if (typeof item === 'object') {
                cleanEmptyKeys(item);
              }
            });
            if (obj[key].length === 0) {
              delete obj[key];
            }
          } else if (typeof obj[key] === 'object') {
            cleanEmptyKeys(obj[key]);
            if (Object.keys(obj[key]).length === 0) {
              delete obj[key];
            }
          }
        }
      }
    }

    cleanEmptyKeys(data);

    delete data.people_also_viewed;
    delete data.similarly_named_profiles;
    delete data.activities;

    return data;
  }

  private isValidLinkedInUrl(url: string): boolean {
    const linkedinUrlRegex =
      /^https:\/\/www\.linkedin\.com\/(in|company)\/[a-zA-Z0-9-]+\/?$/;
    return linkedinUrlRegex.test(url);
  }
}
