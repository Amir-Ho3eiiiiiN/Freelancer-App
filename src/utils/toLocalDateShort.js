export default function toLocalDateShort(date) {
  return new Date(date).toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
