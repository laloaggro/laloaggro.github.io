# Notion + VSCode Integration Guide

This guide explains how to integrate Notion with VSCode for better workflow and documentation.

## Recommended Extensions

The following extensions are recommended for better Notion integration:

1. **REST Client** - For testing Notion API endpoints directly from VSCode
2. **Markdown All in One** - For better Markdown editing experience similar to Notion
3. **GitHub Pull Requests and Issues** - For tracking project issues that can be synced with Notion

## VSCode Settings for Notion Integration

The `.vscode/settings.json` file includes configurations that optimize VSCode for Notion-like editing:

- Format on save enabled for consistent formatting
- Optimized Markdown preview settings
- REST Client environment variables for Notion API

## Tasks for Notion Integration

The `.vscode/tasks.json` file includes several tasks that can help export data to Notion:

1. **Export project structure for Notion** - Creates a file tree that can be copied to Notion
2. **Export TODOs for Notion** - Extracts all TODO, FIXME, and NOTE comments from the codebase
3. **Export documentation for Notion** - Lists all Markdown files that can be synced with Notion

## New Export Files for Notion Import

We've created additional export files that can be imported directly into Notion as databases:

1. **Project Information** (`notion-export/project-info.csv`) - Contains details about the website and projects
2. **Tasks and Roadmap** (`notion-export/tasks.csv`) - Lists current tasks, priorities, and status
3. **Project Structure** (`notion-export/project-structure.txt`) - Shows the complete file structure

## Using the REST Client with Notion API

To use the Notion API with the REST Client extension:

1. Create a `.env` file in your project root with your Notion API key:
   ```
   NOTION_API_KEY=your_notion_api_key_here
   ```

2. Create `.http` files to make requests to the Notion API:
   ```http
   ### Get database
   GET https://api.notion.com/v1/databases
   Authorization: Bearer {{NOTION_API_KEY}}
   Notion-Version: 2022-06-28
   ```

## Syncing Documentation with Notion

You can use the export tasks to generate documentation that can be manually copied to Notion:

1. Run `Export documentation for Notion` task to list all Markdown files
2. Review and update your Notion pages with the latest documentation
3. Use the `Export TODOs for Notion` task to track technical debt in Notion

## Creating a Project Dashboard in Notion

To create a comprehensive project dashboard in Notion:

1. Import the CSV files into Notion as databases:
   - Create a new database for "Projects" and import `notion-export/project-info.csv`
   - Create a new database for "Tasks" and import `notion-export/tasks.csv`

2. Link the databases together using relations:
   - Create a relation between Tasks and Projects
   - Use rollups to calculate progress and statistics

3. Create views for different perspectives:
   - Kanban board for task management
   - Gallery view for projects
   - Calendar view for deadlines

4. Add the project structure as a code block in a Notion page for reference