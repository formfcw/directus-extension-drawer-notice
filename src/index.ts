// Based on https://github.com/directus/directus/blob/main/app/src/interfaces/presentation-notice/index.ts

import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
    id: "drawer-notice",
    name: "Drawer Notice",
    description: "A notice field that is only visible in the drawer.",
    icon: "info",
    component: InterfaceComponent,
    hideLabel: true,
    hideLoader: true,
    autoKey: true,
    types: ["alias"],
    localTypes: ["presentation"],
    group: "presentation",
    options: [
        {
            field: "color",
            name: "$t:color",
            type: "string",
            meta: {
                width: "half",
                interface: "select-dropdown",
                options: {
                    choices: [
                        { text: "$t:normal", value: "normal" },
                        { text: "$t:info", value: "info" },
                        { text: "$t:success", value: "success" },
                        { text: "$t:warning", value: "warning" },
                        { text: "$t:danger", value: "danger" },
                    ],
                },
            },
            schema: {
                default_value: "normal",
            },
        },
        {
            field: "icon",
            name: "$t:icon",
            type: "string",
            meta: {
                width: "half",
                interface: "select-icon",
            },
        },
        {
            field: "text",
            name: "$t:text",
            type: "string",
            meta: {
                width: "full",
                interface: "system-input-translated-string",
                options: {
                    placeholder: "$t:interfaces.presentation-notice.text",
                },
            },
        },
        {
            field: "hidden",
            name: "Field Visibility",
            type: "string",
            meta: {
                width: "full",
                interface: "select-dropdown",
                options: {
                    choices: [
                        {
                            text: "Hidden while creating the item",
                            value: "on_create",
                        },
                        {
                            text: "Hidden while updating the item",
                            value: "on_update",
                        },
                    ],
                    allowNone: true,
                },
            },
        },
    ],
    preview: `<svg width="156" height="96" viewBox="0 0 156 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="glow" d="M132 25H24C20.6863 25 18 27.6863 18 31V65C18 68.3137 20.6863 71 24 71H132C135.314 71 138 68.3137 138 65V31C138 27.6863 135.314 25 132 25Z" fill="var(--background-page)"/><path d="M52.446 25H24C20.6863 25 18 27.6863 18 31V65C18 68.3137 20.6863 71 24 71H52.446V25Z" fill="var(--primary)" fill-opacity="0.5"/><path d="M128 35H82C80.8954 35 80 35.8954 80 37V39C80 40.1046 80.8954 41 82 41H128C129.105 41 130 40.1046 130 39V37C130 35.8954 129.105 35 128 35Z" fill="var(--primary)" fill-opacity="0.25"/><path d="M108 55H82C80.8954 55 80 55.8954 80 57V59C80 60.1046 80.8954 61 82 61H108C109.105 61 110 60.1046 110 59V57C110 55.8954 109.105 55 108 55Z" fill="var(--primary)" fill-opacity="0.25"/><path d="M98 45H82C80.8954 45 80 45.8954 80 47V49C80 50.1046 80.8954 51 82 51H98C99.1046 51 100 50.1046 100 49V47C100 45.8954 99.1046 45 98 45Z" fill="var(--primary)" fill-opacity="0.25"/><path d="M65.426 45.074H66.574V46.25H65.426V45.074ZM65.426 47.426H66.574V50.926H65.426V47.426ZM66 42.176C65.2347 42.1743 64.4766 42.3238 63.7692 42.6158C63.0619 42.9079 62.4191 43.3368 61.878 43.878C61.3368 44.4191 60.9079 45.0619 60.6158 45.7692C60.3238 46.4766 60.1743 47.2347 60.176 48C60.1743 48.7653 60.3238 49.5234 60.6158 50.2308C60.9079 50.9381 61.3368 51.5809 61.878 52.122C62.4191 52.6632 63.0619 53.0921 63.7692 53.3842C64.4766 53.6762 65.2347 53.8257 66 53.824C66.7653 53.8257 67.5234 53.6762 68.2308 53.3842C68.9381 53.0921 69.5809 52.6632 70.122 52.122C70.6632 51.5809 71.0921 50.9381 71.3842 50.2308C71.6762 49.5234 71.8257 48.7653 71.824 48C71.8257 47.2347 71.6762 46.4766 71.3842 45.7692C71.0921 45.0619 70.6632 44.4191 70.122 43.878C69.5809 43.3368 68.9381 42.9079 68.2308 42.6158C67.5234 42.3238 66.7653 42.1743 66 42.176ZM66 52.676C64.7611 52.672 63.574 52.1781 62.6979 51.3021C61.8219 50.426 61.328 49.2389 61.324 48C61.328 46.7611 61.8219 45.574 62.6979 44.6979C63.574 43.8219 64.7611 43.328 66 43.324C67.2389 43.328 68.426 43.8219 69.3021 44.6979C70.1781 45.574 70.672 46.7611 70.676 48C70.672 49.2389 70.1781 50.426 69.3021 51.3021C68.426 52.1781 67.2389 52.672 66 52.676Z" fill="var(--primary)"/></svg>`,
});
