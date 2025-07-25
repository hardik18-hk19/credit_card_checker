export const checkCreditCard = async (req, res) => {
  try {
    const { cardNumber } = req.body;

    if (!cardNumber || isNaN(cardNumber)) {
      return res
        .status(400)
        .json({ error: "Card number is required and must be numeric" });
    }

    const digits = cardNumber.length;

    if (digits < 12 || digits > 19) {
      return res.status(400).json({ error: "Invalid card number length" });
    }

    if (luhnCheck(cardNumber)) {
      return res
        .status(200)
        .json({ success: true, message: "Valid card number" });
    }

    // One Digit Short
    if (digits >= 12 && digits <= 18) {
      for (let i = 0; i <= 9; i++) {
        const testNumber = cardNumber + i;
        if (luhnCheck(testNumber)) {
          return res.status(200).json({
            success: false,
            message: "Card number is one digit short",
            suggestion: `Add '${i}' at the end → ${testNumber}`,
          });
        }
      }
    }

    // Correct LAst Digit
    if (digits >= 13 && digits <= 19) {
      const prefix = cardNumber.slice(0, -1);
      for (let i = 0; i <= 9; i++) {
        const testNumber = prefix + i;
        if (luhnCheck(testNumber)) {
          return res.status(200).json({
            success: false,
            message: "Card number is invalid",
            suggestion: `Replace last digit with '${i}' → ${testNumber}`,
          });
        }
      }
    }

    return res.status(400).json({ error: "Could not fix the card number" });
  } catch (error) {
    console.error("Error validating card:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const luhnCheck = (num) => {
  let sum = 0;
  let alternate = false;

  for (let i = num.length - 1; i >= 0; i--) {
    let n = parseInt(num.charAt(i), 10);
    if (alternate) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alternate = !alternate;
  }

  return sum % 10 === 0;
};
