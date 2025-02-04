import Journey from "../_components/Journey";

export default async function JourneyDefault() {
  await new Promise((res) => setTimeout(res, 3000));
  return <Journey />;
}
