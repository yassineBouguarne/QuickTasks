export default function Stats({ todos }) {
  const numItems = todos.length;
  const numPacked = todos.filter((todo) => todo.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer>
      <p>
        {percentage === 100
          ? "All items are packed! 🎉 You're all set!"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${
              isNaN(percentage) ? 0 : percentage
            }%)`}
      </p>
    </footer>
  );
}
