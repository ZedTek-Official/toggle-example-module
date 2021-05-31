# Admin Module
Want to make managing your server easier? Awesome!

This module is open source and open to modification, but credit to ZedTek as the original developer is required.

## Setup Instructions:
1. Open the Toggle directory in your file manager of choice.
2. Create the following folders if they aren't there already:
    1. `./modules/`
    2. `./commands/ext/`
1. Download the `module.json` file and save it to the `./modules` directory in Toggle with a unique name. We suggest `admin.json`.
2. Start Toggle.
5. Wait for the module commands to load, and then quit Toggle.
6. Open the folder `./commands/ext/Admin Module/` that was created.
7. Create the file `config.json` and open it in your favorite text editor.
8. Add the following content to the file: 
```
{
    "commandPrefix": "admin",
    "administratorRole"
    "adminBotOutputChannel": "CHANNEL_ID",
    "adminPingRole": "ROLE_ID",
    "warnRoles": {
        "warning1": "ROLE_ID",
        "warning2": "ROLE_ID",
        "warning3": "ROLE_ID"
    },
    "muteRole": "ROLE_ID",
    "beenMutedRole": "ROLE_ID"
}
```

Replace the placeholders with the necessary info.

**NOTE:** In order for this module to work, you will need the following roles on your server:

* Warning 1
* Warning 2
* Warning 3
* Muted
* Already Been Muted
* Staff

**NOTE:** You will also need a staff-only chat channel that Toggle can access.

You will need to copy the IDs of all of these roles and channels into the correct places in `config.json`.