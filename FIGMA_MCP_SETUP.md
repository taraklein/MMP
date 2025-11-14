# Figma MCP Setup Guide

This guide will help you set up the Figma Model Context Protocol (MCP) server in Cursor.

## Option 1: Local MCP Server (via Figma Desktop App)

### Prerequisites
- Figma Desktop App installed and updated to the latest version

### Steps

1. **Enable MCP Server in Figma Desktop:**
   - Open the Figma desktop app
   - Open any design file
   - Press `Shift + D` to enable Dev Mode (or toggle it in the toolbar)
   - In the right-hand sidebar, click "Enable desktop MCP server"
   - The server will run at `http://127.0.0.1:3845/mcp`

2. **Configure in Cursor:**
   - Press `Shift + Command + P` (macOS) or `Shift + Ctrl + P` (Windows) to open the command palette
   - Search for "Cursor settings" and select it
   - Navigate to the **MCP** tab
   - Click "Add Custom MCP"
   - Add the following configuration:
     ```json
     {
       "mcpServers": {
         "figma-desktop": {
           "url": "http://127.0.0.1:3845/mcp"
         }
       }
     }
     ```
   - Save the configuration

## Option 2: Remote MCP Server (via Figma Web)

### Steps

1. **Enable Dev Mode in Figma Web:**
   - Open a Figma design file in your browser
   - Press `Shift + D` to enable Dev Mode
   - In the right-hand inspect panel, click "Set up an MCP client"

2. **Configure in Cursor:**
   - Click the deep link provided in Figma's MCP configuration menu (this will open Cursor)
   - Click "Install" under "Install MCP Server?"
   - Click "Connect" next to Figma to authenticate
   - Allow access when prompted

   Alternatively, manually configure:
   - Open Cursor settings (Command Palette → "Cursor settings")
   - Go to the **MCP** tab
   - Add the remote server:
     ```json
     {
       "mcpServers": {
         "figma": {
           "url": "https://mcp.figma.com/mcp"
         }
       }
     }
     ```

## Verification

After configuration, you should be able to:
- Access Figma design information directly from Cursor
- Query design tokens, components, and specifications
- Get design-to-code alignment assistance

## Troubleshooting

- **Server not connecting:** Ensure Figma Desktop is running and Dev Mode is enabled (for local server)
- **Authentication issues:** Make sure you're logged into Figma and have granted necessary permissions
- **Configuration not saving:** Check that you have the latest version of Cursor installed

## Resources

- [Figma MCP Documentation](https://help.figma.com/hc/en-us/articles/35281350665623)
- [Figma Desktop MCP Tutorial](https://www.youtube.com/watch?v=nPnkMPabCfI)


