import type { EndpointOutput, Request } from "@sveltejs/kit";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get(request: Request): Promise<EndpointOutput> {
	// the `id` parameter is available because this file
	// is called [id].json.js
	const { id } = request.params;
  const url = `https://silloi.microcms.io/api/v1/talks/${id}`;
	const res = await fetch(url, {
    headers: {
      'X-API-KEY': process.env['VITE_X-API-KEY'],
    },
  });

  if (res) {
		return {
			body: await res.json(),
		};
  }
}
