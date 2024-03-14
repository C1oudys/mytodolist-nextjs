import { CompanyInfo } from '@/app/types';

export async function GET(request: Request): Promise<Response> {
  try {
    const response = await fetch(`http://localhost:4000/companyInfo`);
    const data: CompanyInfo = await response.json();
    console.log("받아온 회사:", data);

    if (!data || Object.keys(data).length === 0) {
      return new Response('No Company inform', { status: 404 });
    }
    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    console.error('Error :(', error);
    return new Response(`Server Error :(`, { status: 500 });
  }
}