export const dynamic = "force-dynamic";
import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
