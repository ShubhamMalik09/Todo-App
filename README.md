
# TODO App

A simple and interactive TODO app built with React that allows users to create, delete, and update tasks. The time of each task's update is recorded in real-time, and users can search for tasks directly from the URL.

## Features

- **Create Tasks**: Add new tasks to your TODO list.
- **Delete Tasks**: Remove tasks from your TODO list.
- **Update Tasks**: Edit tasks and update their information. The update time is recorded and displayed.
- **Search Tasks**: Search for specific tasks directly from the URL.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ShubhamMalik09/Todo-App.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Running the App

To start the development server, run:

```bash
npm run dev
```

The app will be running on `http://localhost:3000`.

## Libraries Used

- **[Concurrently](https://www.npmjs.com/package/concurrently)**: To run multiple commands concurrently.
- **[Axios](https://www.npmjs.com/package/axios)**: For making HTTP requests.
- **[React Router Dom](https://www.npmjs.com/package/react-router-dom)**: For routing and navigation.
- **[React Icons](https://www.npmjs.com/package/react-icons)**: For including icons in your React app.

## Project Structure

```plaintext
todo-app/
├── public/
│   ├── index.html
├── server/
│   ├── db.json
├── src/
│   ├── components/
│   │   ├── Task.jsx
│   │   ├── TaskModal.jsx
│   │   ├── Tasks.jsx
│   │   ├── Todo.jsx
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── package.json
├── README.md
```

## How to Use

1. **Create Tasks**: Use the input form to add new tasks.
2. **Delete Tasks**: Click the delete icon next to a task to remove it.
3. **Update Tasks**: Click on a task to edit its details and save changes.
4. **Search Tasks**: Use the search functionality by appending the search query to the URL, e.g., `http://localhost:3000/search`.

## ScreenShots
<img src="screenshots/Screenshot (55).png">
<br>
<img src="screenshots/Screenshot (58).png">
<br>
<img src="screenshots/Screenshot (64).png">
<br>
<img src="screenshots/Screenshot (65).png">
<br>

## Contributing

Feel free to submit issues and enhancement requests.

