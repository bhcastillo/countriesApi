import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
  PORT: Number(process.env.PORT) ?? 3000,
  URLS: {
    GET_COUNTRY: (country: string) => `https://restcountries.com/v3.1/name/${country}`
  }
}
