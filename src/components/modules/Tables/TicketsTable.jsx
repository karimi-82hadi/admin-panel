function TicketsTable() {
  return (
    <div className="mt-3 overflow-hidden rounded-tl-lg rounded-tr-lg">
      <table className="w-full table-fixed whitespace-nowrap text-sm lg:mt-5 lg:text-base">
        <thead className="h-14 bg-neutral-500 transition-colors duration-300 lg:h-16 dark:bg-neutral-900">
          <tr className="text-right text-neutral-900 *:px-3 dark:text-neutral-500">
            <th>نام و نام خانوادگی</th>
            <th className="hidden sm:table-cell">تاریخ</th>
            <th className="hidden xl:table-cell">توضیحات</th>
            <th className="hidden md:table-cell"></th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default TicketsTable;
