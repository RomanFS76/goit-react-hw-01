import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.headRaw}>
          <th className={css.headtitle}>Type</th>
          <th className={css.headtitle}>Amount</th>
          <th className={css.headtitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el) => {
          return (
            <tr key={el.id} className={css.Raw}>
              <td className={css.itemRaw}>{el.type}</td>
              <td className={css.itemRaw}>{el.amount}</td>
              <td className={css.itemRaw}>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
