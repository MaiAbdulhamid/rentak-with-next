import axios from "@/lib/axios";

export async function GET(request: Request) {
  try {
    const response = await axios.get(`/home/get-home-units?lang=en`);
    const data = response.data;

    // Send the data back to the client
    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    console.error("Get Units Error:", error);
    return new Response("Get Units Error", { status: 500 });
  }
}
