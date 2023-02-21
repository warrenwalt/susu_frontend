export default function FilterForm({ w, border_b }) {
  return (
    <form>
      <select
        id="color"
        name="color"
        className={`py-2 mr-10 select-none rounded-md  text-xs ${w} ${border_b}`}
      >
        <option value="red" defaultValue>
          size
        </option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </form>
  );
}
