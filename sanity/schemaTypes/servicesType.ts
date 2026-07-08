import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesType = defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: "array",
            of: [
                defineArrayMember({
                    type: 'string'
                })
            ]
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        
    ]
})
