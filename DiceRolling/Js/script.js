// ## 📋 Common Commit Types

// | Type | When to use it | Example Subject Line |
// |---|---|---|
// | feat | A new feature for the user | feat: add password strength meter |
// | fix | A bug fix | fix: prevent crash on empty search |
// | docs | Documentation only changes | docs: update setup instructions in README |
// | style | Formatting, missing semi-colons, etc. | style: fix indentation in login.js |
// | refactor | Code change that neither fixes a bug nor adds a feature | refactor: simplify user validation logic |
// | perf | Code change that improves performance | perf: reduce image load time by 20% |
// | test | Adding missing tests or correcting existing tests | test: add unit tests for auth controller |
// | build | Changes affecting build system or external dependencies | build: upgrade react to version 18.2 |
// | ci | Changes to CI configuration files and scripts | ci: add GitHub Action for linting |
// | chore | Other changes that don't modify src or test files | chore: update .gitignore |

// ------------------------------
// ## 💡 Pro-Tip: Adding Scope and Breaking Changes
// You can add a scope in parentheses to specify exactly what part of the code changed, or use a ! to signal a breaking change.

// * With Scope: feat(api): add endpoint for user profiles
// * Breaking Change: feat(auth)!: remove support for legacy API keys
// * Multi-line Example:

// fix(ui): resolve alignment issue on mobile

// The navigation bar was overlapping the header on screens
// smaller than 480px. Adjusted padding and z-index.

// Resolves: #402

// Would you like to know how to set up a git hook to automatically check if your messages follow this format?
const numberOfDice = document.getElementById("numberOfDice");
const rollButton = document.getElementById("roll-btn");
const diceNumber = document.getElementById("diceNumber");
const diceImage = document.getElementById("diceImage");
rollButton.onclick = function () {
  let numberDice = [];
  const DiceImage = [];
  for (i = 0; i < numberOfDice.value; i++) {
    const dice = Math.floor(Math.random() * 6) + 1;
    numberDice.push(dice);
    DiceImage.push(`<img src="resource/image/diceface${dice}.png" >`);
    console.log(DiceImage);
  }
  diceNumber.textContent = `Dice: ${numberDice.join(`,`)}`;
  diceImage.innerHTML = DiceImage.join(" ");
};
