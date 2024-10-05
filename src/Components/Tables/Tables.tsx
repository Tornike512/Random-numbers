import { v4 as uuidv4 } from "uuid";

import "./Tables.scss";

export function Tables({
  numbersList,
  column1,
  column2,
}: {
  numbersList: string[];
  column1: number;
  column2: number;
}) {
  return (
    <table className="phone-numbers-list">
      {numbersList.slice(column1, column2).map((number: string) => {
        return (
          <tr key={uuidv4()}>
            <td>{number}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Tables;
