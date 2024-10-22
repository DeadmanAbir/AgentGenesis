# Contributing 🎯

Thanks for your interest in contributing to https://www.agentgenesis.dev/. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@AbirDutta](https://x.com/ItsDutta99).

<br>

# Code of Conduct 📃

Please read and follow our [Code of Conduct.](https://github.com/DeadmanAbir/AgentGenesis/blob/main/CODE_OF_CONDUCT.md)

<br>

# Need Help With The Basics? 🤔

If you're new to Git and GitHub, no worries! Here are some useful resources:

- [Forking a Repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repository](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to Create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting Started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)

<br>

# About this repository

This repository is using NextJS with Typescript.

<br>

# Project Structure 📂

This repository is structured as follows:

| Path                  | Description                              |
| --------------------- | ---------------------------------------- |
| `src/app/(app)`       | The Next.js application for the website. |
| `src/components`      | The React components for the website.    |
| `src/app/content/docs`| The mdx content for the website.         |


```bash
AGENTGENESIS/
├── .github/                  # GitHub-related configurations such as workflows, issue templates, etc
│   
├── .husky/                   # Pre-commit file
├──                        
├── public/                   # All the images for the reference of the public are included here
│   
├── src/                      # All the components of the project are included here
│     
├── .dockerignore             
│   
├── .env.sample  
│   
├── .eslintignore  
│   
├──  .eslintrc     
│   
├── .gitignore         
│   
├── .prettierignore                  
│   
├── .prettierrc
├──
├── CODE_OF_CONDUCT.md        # Some rules for the contributor
├──
├── components.json
├──          
├── contentlayer.config.ts
├──
├── CONTRIBUTING.md           # Instructions for the contributors
├──
├── docker-compose.yml
├──
├── Dockerfile
├──
├── LICENSE                   # A permission to do something
├──
├── next.config.mjs
├──
├── package-lock.json
├──
├── package.json
├──
├── postcss.config.mjs
├──
├── README.md                  # Basic instructions about contribution 
├──
├── tailwind.config.ts
├──
├── tsconfig.json
```

<br>

# First Pull Request ✨

1) **Fork this repository**

You can fork this repo by clicking the fork button in the top right corner of this page.

2) **Clone on your local machine**

```bash
git clone https://github.com/DeadmanAbir/AgentGenesis.git
```

3) **Navigate to project directory**

```bash
cd AgentGenesis
```

4) **Create a new branch**

```bash
git checkout -b <your_branch_name>
```

5) **Install dependencies**

```bash
npm install
```

6) **Examples**

1. To run the `agentgenesis.dev` website:

```bash
npm run dev
```

7) **Components**

We use `next/contentlayer`

When adding or modifying components, please ensure that:

1. You update the documentation.
3. You update `src/config/docs.ts` accordingly.

8) **Commit Convention**

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

<br>

# Alternatively, contribute using GitHub Desktop 🖥️

1. **Open GitHub Desktop:**
  Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**
- If you haven't cloned the Project-Guidance repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
- Choose the Project-Guidance repository from the list of repositories on GitHub and clone it to your local machine.

3.**Switch to the Correct Branch:**
- Ensure you are on the branch that you want to submit a pull request for.
- If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. **Make Changes:**
- Make your changes to the code or files in the repository using your preferred code editor.

5. **Commit Changes:**
- In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
- Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. **Push Changes to GitHub:**
- After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. **Create a Pull Request:**
- Go to the GitHub website and navigate to your fork of the Project-Guidance repository.
- You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**
- On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
- Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**
Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the Project-Guidance repository.

<br>

# For Help And Support 💬

- Admin Github Profile:- [Abir Dutta](https://github.com/DeadmanAbir)
- Contact :- [Email](abirdutta90990@gmail.com)

<br>

# Good Coding Practices 🧑‍💻

1. **Follow the Project's Code Style**

   - Maintain consistency with the existing code style (indentation, spacing, comments).
   - Use meaningful and descriptive names for variables, functions, and classes.
   - Keep functions short and focused on a single task.
   - Avoid hardcoding values; instead, use constants or configuration files when possible.

2. **Write Clear and Concise Comments**

   - Use comments to explain why you did something, not just what you did.
   - Avoid unnecessary comments that state the obvious.
   - Document complex logic and functions with brief explanations to help others understand your thought -process.

3. **Keep Code DRY (Don't Repeat Yourself)**

   - Avoid duplicating code. Reuse functions, methods, and components whenever possible.
   - If you find yourself copying and pasting code, consider creating a new function or component.

4. **Write Tests**

   - Write unit tests for your functions and components.
   - Ensure your tests cover both expected outcomes and edge cases.
   - Run tests locally before making a pull request to make sure your changes don’t introduce new bugs.

5. **Code Reviews and Feedback**

   - Be open to receiving constructive feedback from other contributors.
   - Conduct code reviews for others and provide meaningful suggestions to improve the code.
   - Always refactor your code based on feedback to meet the project's standards.

<br>

# Pull Request Process 🚀

When submitting a pull request, please adhere to the following:

1. **Self-review your code** before submission. 😀
2. Include a detailed description of the functionality you’ve added or modified.
3. Comment your code, especially in complex sections, to aid understanding.
4. Add relevant screenshots to assist in the review process.
5. Submit your PR using the provided template and hang tight; we'll review it as soon as possible! 🚀

<br>

# Issue Report Process 📌

To report an issue, follow these steps:

1. Navigate to the project's issues section :- [Issues](https://github.com/DeadmanAbir/AgentGenesis/issues/new/choose)
2. Please kindly choose the appropriate template according to your issue.
3. Provide a clear and concise description of the issue.
4. Wait until someone looks into your report.
5. Begin working on the issue only after you have been assigned to it. 🚀

<br>

# Thank you for contributing 💗

We truly appreciate your time and effort to help improve our project. Feel free to reach out if you have any questions or need guidance. Happy coding! 🚀

##