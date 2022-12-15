export const SaveButton = ({ callback }: { callback: () => void }) => {
  return (
    <button onClick={callback}>
      <p>Save</p>
    </button>
  );
};
