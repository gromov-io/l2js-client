(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{378:function(t,e,r){"use strict";r.r(e);var v=r(44),s=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),r("h2",{attrs:{id:"objects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[t._v("#")]),t._v(" Objects")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("L2Object\n  |\n  ├── L2Buff\n  ├── L2Skill\n  ├── L2Creature\n  |     ├── L2PartyPet\n  |     ├── L2Summon\n  |     ├── L2Mob\n  |     ├── L2Npc\n  |     └── L2Character\n  |           ├── L2User\n  |           └── L2PartyMember\n  ├── L2Mail\n  ├── L2Recipe\n  └── L2Item\n        └── L2DroppedItem\n")])])]),r("h2",{attrs:{id:"commands"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Command")]),t._v(" "),r("th",[t._v("Does what?")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("say")]),t._v(" "),r("td",[t._v("Send a general message")])]),t._v(" "),r("tr",[r("td",[t._v("shout")]),t._v(" "),r("td",[t._v("Shout a message")])]),t._v(" "),r("tr",[r("td",[t._v("tell")]),t._v(" "),r("td",[t._v("Send a PM")])]),t._v(" "),r("tr",[r("td",[t._v("sayToParty")]),t._v(" "),r("td",[t._v("Send a party message")])]),t._v(" "),r("tr",[r("td",[t._v("sayToClan")]),t._v(" "),r("td",[t._v("Send a clan message")])]),t._v(" "),r("tr",[r("td",[t._v("sayToTrade")]),t._v(" "),r("td",[t._v("Send a trade message")])]),t._v(" "),r("tr",[r("td",[t._v("sayToAlly")]),t._v(" "),r("td",[t._v("Send an ally message")])]),t._v(" "),r("tr",[r("td",[t._v("moveTo")]),t._v(" "),r("td",[t._v("Move to location")])]),t._v(" "),r("tr",[r("td",[t._v("hit")]),t._v(" "),r("td",[t._v("Hit on target. Accepts L2Object object or ObjectId")])]),t._v(" "),r("tr",[r("td",[t._v("attack")]),t._v(" "),r("td",[t._v("Attack a target. Accepts L2Object object or ObjectId")])]),t._v(" "),r("tr",[r("td",[t._v("cancelTarget")]),t._v(" "),r("td",[t._v("Cancel the active target")])]),t._v(" "),r("tr",[r("td",[t._v("acceptJoinParty")]),t._v(" "),r("td",[t._v("Accepts the requested party invite")])]),t._v(" "),r("tr",[r("td",[t._v("declineJoinParty")]),t._v(" "),r("td",[t._v("Declines the requested party invite")])]),t._v(" "),r("tr",[r("td",[t._v("nextTarget")]),t._v(" "),r("td",[t._v("Select next/closest attackable target")])]),t._v(" "),r("tr",[r("td",[t._v("inventory")]),t._v(" "),r("td",[t._v("Request for inventory item list")])]),t._v(" "),r("tr",[r("td",[t._v("useItem")]),t._v(" "),r("td",[t._v("Use an item. Accepts L2Item object or ObjectId")])]),t._v(" "),r("tr",[r("td",[t._v("requestDuel")]),t._v(" "),r("td",[t._v("Request player a duel. If no char is provided, the command tries to request the selected target")])]),t._v(" "),r("tr",[r("td",[t._v("autoShots")]),t._v(" "),r("td",[t._v("Enable/disable auto-shots")])]),t._v(" "),r("tr",[r("td",[t._v("cancelBuff")]),t._v(" "),r("td",[t._v("Cancel a buff")])]),t._v(" "),r("tr",[r("td",[t._v("sitOrStand")]),t._v(" "),r("td",[t._v("Sit or stand")])]),t._v(" "),r("tr",[r("td",[t._v("validatePosition")]),t._v(" "),r("td",[t._v("Sync position with server")])]),t._v(" "),r("tr",[r("td",[t._v("dwarvenCraftRecipes")]),t._v(" "),r("td",[t._v("Dwarven craft recipe book")])]),t._v(" "),r("tr",[r("td",[t._v("craft")]),t._v(" "),r("td",[t._v("Craft an item")])])])]),t._v(" "),r("h2",{attrs:{id:"events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Event Type")]),t._v(" "),r("th",[t._v("Event Data Type")]),t._v(" "),r("th",[t._v("When?")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("LoggedIn")]),t._v(" "),r("td",[t._v("void")]),t._v(" "),r("td",[t._v("logged in to Game server")])]),t._v(" "),r("tr",[r("td",[t._v("PacketReceived")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L6",target:"_blank",rel:"noopener noreferrer"}},[t._v("EPacketReceived"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("a packet is received")])]),t._v(" "),r("tr",[r("td",[t._v("PacketSent")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L7",target:"_blank",rel:"noopener noreferrer"}},[t._v("EPacketSent"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("a packet is sent")])]),t._v(" "),r("tr",[r("td",[t._v("PartyRequest")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L8",target:"_blank",rel:"noopener noreferrer"}},[t._v("EPartyRequest"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("receive a party request")])]),t._v(" "),r("tr",[r("td",[t._v("Die")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L13",target:"_blank",rel:"noopener noreferrer"}},[t._v("EDie"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("L2Creature is dead")])]),t._v(" "),r("tr",[r("td",[t._v("TargetSelected")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L14",target:"_blank",rel:"noopener noreferrer"}},[t._v("ETargetSelected"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("L2Creature is selected by L2Creature")])]),t._v(" "),r("tr",[r("td",[t._v("MyTargetSelected")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L19",target:"_blank",rel:"noopener noreferrer"}},[t._v("EMyTargetSelected"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("L2Creature is selected by L2User")])]),t._v(" "),r("tr",[r("td",[t._v("Attacked")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L20",target:"_blank",rel:"noopener noreferrer"}},[t._v("EAttacked"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("L2User is beings attacked")])]),t._v(" "),r("tr",[r("td",[t._v("RequestedDuel")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L21",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERequestedDuel"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("receive a duel request")])]),t._v(" "),r("tr",[r("td",[t._v("StartMoving")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L22",target:"_blank",rel:"noopener noreferrer"}},[t._v("EStartMoving"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("L2Creature starts moving")])]),t._v(" "),r("tr",[r("td",[t._v("StopMoving")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L23",target:"_blank",rel:"noopener noreferrer"}},[t._v("EStopMoving"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("L2Creature stops moving")])]),t._v(" "),r("tr",[r("td",[t._v("CraftResult")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L24",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECraftResult"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("A result from crafting an item")])]),t._v(" "),r("tr",[r("td",[t._v("RecipeBook")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L25",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERecipeBook"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("A receipt book is received")])]),t._v(" "),r("tr",[r("td",[t._v("PartySmallWindow")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L30",target:"_blank",rel:"noopener noreferrer"}},[t._v("EPartySmallWindow"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("The party small window updated")])]),t._v(" "),r("tr",[r("td",[t._v("PartyMemberPosition")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L35",target:"_blank",rel:"noopener noreferrer"}},[t._v("EPartyMemberPosition"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("A party member position is updated")])]),t._v(" "),r("tr",[r("td",[t._v("CharInfo")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L36",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECharInfo"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("character info")])]),t._v(" "),r("tr",[r("td",[t._v("Revive")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L37",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERevive"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("creature is revived")])]),t._v(" "),r("tr",[r("td",[t._v("ConfirmDlg")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L38",target:"_blank",rel:"noopener noreferrer"}},[t._v("EConfirmDlg"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("confirm dialog")])]),t._v(" "),r("tr",[r("td",[t._v("SystemMessage")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L43",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESystemMessage"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("server system message")])]),t._v(" "),r("tr",[r("td",[t._v("CreatureSay")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L44",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECreatureSay"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("creature says")])]),t._v(" "),r("tr",[r("td",[t._v("NpcHtmlMessage")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L49",target:"_blank",rel:"noopener noreferrer"}},[t._v("ENpcHtmlMessage"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("receiving HTML from an NPC")])]),t._v(" "),r("tr",[r("td",[t._v("NpcQuestHtmlMessage")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L54",target:"_blank",rel:"noopener noreferrer"}},[t._v("ENpcQuestHtmlMessage"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("receiving a quest HTML from an NPC")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);