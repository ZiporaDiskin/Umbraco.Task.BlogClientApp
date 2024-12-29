
export interface BlogPost {
    contentType: string;
    createDate: string; 
    updateDate: string; 
    route: {
      path: string;
      startItem: {
        id: string;
        path: string;
      };
    };
    id: string;
    properties: {
      title: string;
      bodyContent: {
        markup: string;
        blocks: any[];  
      };
      publishDate: string;
      authorName: string;
      tags: string[]; 
    };
    cultures: Record<string, any>; 
  }
  