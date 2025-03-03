export function THead({ columns }) {
    return (
      <thead className="bg-gray-800 text-white">
        <tr>
          {columns.map((column) => (
            <th key={column} className="px-4 py-2 text-left">
              {column}
            </th>
          ))}
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
    );
  }