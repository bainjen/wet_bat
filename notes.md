# Notes

## Web Bat

- travel agency looking for an easy-use back office solution
- dashboard design mockup provided

## MVP

- ability to view a list of quotes
- view a detail screen for individual quotes
- quote details:
  - departure airport
  - destination airport
  - departure date
  - return date
  - number of travelers
  - transportation during travels (e.g. rental car)
  - contact info

## Project Requirements

- relational DB
- method to create DB schema (using migrations)
- React front end
- UI component framework
- minimal page layout
- any method of data fetching (REST, GraphQL, JSON API)
- committed to Github
- single repo

## Not Required

- authentication
- infrastructure

## Approach

- implement front end layout
- create database
- seed database
- connect front and back

## Captain's Log

- I was not yet familiar with Material UI so I began this project by building out the front end nav and sidebar structures to get acquainted.

- Since this was new to me, it was a slow start. Looking back over my code, there is repetition in the jsx. I didn't have time to refactor it, but I did take the time to modularize the QuoteForm component into smaller input Components and map elements where appropriate.

- After I got the structure of the front figured out, I moved to the database

- I created four tables, only bringing in the data needed for this specific task.

- My first approach to using airport data was to pull real data online into a csv file. I could not figure out how to seed this data into the db with a relative path for other users (I could only get it to work with a direct path from my computer), so in the end, I copied over a small sample of airports to seed the database.

- From there, I worked to make a connection from the front to the back so information could be pulled and input from the front end. Since this project is small in scope, I pulled in all the data to the front, rather than making specific queries for data. If this were a larger scale, I imagine I'd need to rethink that strategy.

- In general, I am more comfortable with the front end. However, in this project I struggled to get Material UI to behave in the ways I thought it would while pulling in data, which proved time consuming. I'm glad I used it because my hope is that next time, I'll be savvier with it :)
