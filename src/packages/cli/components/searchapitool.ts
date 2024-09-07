type ExtraOptions = {
  device?: 'desktop' | 'mobile' | 'tablet';
  location?: string;
  uule?: string;
  google_domain?: string;
  gl?: string;
  hl?: string;
  lr?: string;
  cr?: string;
  nfpr?: 0 | 1;
  filter?: 0 | 1;
  safe?: 'active' | 'off';
  time_period?:
    | 'last_hour'
    | 'last_day'
    | 'last_week'
    | 'last_month'
    | 'last_year';
  time_period_min?: string;
  time_period_max?: string;
  num?: number;
  page?: number;
};

interface SearchApiToolProps {
  apiKey: string;
  options?: ExtraOptions;
}

interface SearchApiToolResults {
  title?: string;
  link?: string;
  snippet: string;
}

export class SearchApiTool {
  private apiKey: string;
  private options?: ExtraOptions;

  constructor(props: SearchApiToolProps) {
    const { apiKey, options } = props;
    if (!apiKey || apiKey.length === 0) {
      throw new Error(
        'SearchApi requires an API key. Please set it as SEARCHAPI_API_KEY in your .env file, AND pass it as a parameter to the SearchApi constructor.',
      );
    }

    this.apiKey = apiKey;
    this.options = options;
  }

  async search(query: string): Promise<SearchApiToolResults[] | string> {
    const url = this.buildUrl(query);
    try {
      const response = await fetch(url);
      const json = await response.json();

      if (json.error) {
        throw new Error(
          `Failed to load search results from SearchApi due to: ${json.error}`,
        );
      }

      if (json.answer_box?.answer) {
        return json.answer_box.answer;
      }

      if (json.organic_results) {
        const data: SearchApiToolResults[] = json.organic_results
          .filter((result: any) => result.snippet)
          .map((result: any) => ({
            title: result.title || null,
            link: result.link || null,
            snippet: result.snippet,
          }));

        return data;
      }

      return 'No valid search results found';
    } catch (error: any) {
      throw new Error(`Failed to fetch from SearchApi: ${error.message}`);
    }
  }

  private buildUrl(query: string): string {
    const params: Record<string, string | number | undefined> = {
      engine: 'google',
      api_key: this.apiKey,
      ...this.options,
      q: query,
    };

    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, `${value}`);
      }
    });

    return `https://www.searchapi.io/api/v1/search?${searchParams.toString()}`;
  }
}
