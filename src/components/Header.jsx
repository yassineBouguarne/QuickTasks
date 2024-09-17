import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  header: {
    fontSize: "1.875rem",
    fontWeight: 800,
    textAlign: "center",
    color: "white",
    marginBottom: "2rem",
  },
});

export default function Header() {
  return <h1 {...stylex.props(styles.header)}>To-Do List</h1>;
}
