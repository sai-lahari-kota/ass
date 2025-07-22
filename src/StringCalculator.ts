export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    let numString = numbers;
    let allowedPattern = /^[0-9,\n]*$/;

    // Check for custom delimiter
    if (numbers.startsWith('//')) {
      const match = numbers.match(/^\/\/(.)\n([\s\S]*)$/);
      if (match) {
        const delim = match[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiter = new RegExp(delim);
        numString = match[2];
        allowedPattern = new RegExp(`^[0-9${delim}]*$`);
      } else {
        throw new Error('Invalid input');
      }
    }

    if (!allowedPattern.test(numString)) {
      throw new Error('Invalid input');
    }

    const parts = numString.split(delimiter);
    return parts.map(Number).reduce((sum, n) => sum + n, 0);
  }
} 