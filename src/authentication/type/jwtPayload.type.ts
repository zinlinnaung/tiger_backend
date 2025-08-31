import { TokenEnum } from '../enum/token.enum';

export type JwtPayload = {
  email: string;
  sub: number;
  role: string;
  token_type: TokenEnum;
  permission: string;
  company_id?: number | null;
};
