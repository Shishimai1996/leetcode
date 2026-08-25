function solution2(N: number, S: string): number {
  // Implement your solution here

  const reserved = S.split(" ");
  const rowReservation: Record<number, Set<string>> = {};

  for (let i = 0; i < reserved.length; i++) {
    const seat = reserved[i];
    if (seat === "") continue;
    const row = parseInt(seat.slice(0, -1), 10);
    const seatLetter = seat.slice(-1);
    if (!rowReservation[row]) {
      rowReservation[row] = new Set();
    }
    rowReservation[row].add(seatLetter);
  }

  let total = 0;

  for (let i = 1; i <= N; i++) {
    const reservedSeats = rowReservation[i] || new Set();
    console.log(reservedSeats);

    const group1 = ["B", "C", "D", "E"];
    const group2 = ["D", "E", "F", "G"];
    const group3 = ["F", "G", "H", "J"];

    const canSitGroup = (group: string[]) =>
      group.every((seat) => !reservedSeats.has(seat));

    const group1Free = canSitGroup(group1);
    const group2Free = canSitGroup(group2);
    const group3Free = canSitGroup(group3);

    console.log(group1Free);
    console.log(group2Free);
    console.log(group3Free);

    if (group1Free && group3Free) {
      total += 2;
    } else if (group1Free || group2Free || group3Free) {
      total += 1;
    }
  }

  return total;
}

const N = 2;
const S = "1A 2F 1C";
// const S = "1A 3C 2B 20G 5A";

console.log(solution2(N, S));
