export interface Columns  {
  align: string,
  column_key: string,
  column_name: string,
  type: string
}

export interface User {
  id: string;
  email: string;
  license_used: number;
  name: {
    first_name: string;
    last_name: string;
    handle: string;
  };
  role: string;
  status: string;
  teams: [{
    text_color: string;
    background_color: string;
    value: string;
  }] 
  selected?: any
}