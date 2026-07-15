export default function StatCard({ contain, about }) {
  return (
    <p className="flex flex-1 flex-col gap-3 md:items-center">
      <span>{about}</span>
      <span className="font-bellefair text-[28px] text-white">{contain}</span>
    </p>
  );
}
