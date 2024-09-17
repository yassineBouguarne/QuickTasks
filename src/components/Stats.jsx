import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  footer: {
    marginTop: "1rem",
    padding: "1rem",
    width: "29rem",
    backgroundColor: "rgba(255, 255, 255, .1)",
    borderRadius: ".5rem",
    color: "white",
    textAlign: "center",
  },
  allPacked: {
    backgroundColor: "#2ba02b",
    color: "black",
    fontSize: "1.2rem",
  },
});

export default function Stats({ todos }) {
  const numItems = todos.length;
  const numPacked = todos.filter((todo) => todo.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer
      {...stylex.props(styles.footer, percentage === 100 && styles.allPacked)}
    >
      <p>
        {numItems === 0
          ? "No items added yet."
          : percentage === 100
          ? "All items are packed! 🎉 You're all set!"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${
              isNaN(percentage) ? 0 : percentage
            }%)`}
      </p>
    </footer>
  );
}
