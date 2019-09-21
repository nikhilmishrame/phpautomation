SystemUtil.Run "C:\Program Files\Internet Explorer\iexplore.exe","https://www.airbnb.co.in/"
'Browser (":=").Page().WebEdit("name:=query").Set ""

Set br = Description.Create
br("title").value = "Vacation Rentals, Homes, Experiences & Places - Airbnb - Internet Explorer"

Set pg = Description.Create
pg("title").value = "Vacation Rentals, Homes, Experiences & Places - Airbnb"

Set where = Description.Create
where("name").value="query"

Set checkin = Description.Create
checkin("name").value="checkin"

Set checkout = Description.Create
checkout("name").value = "checkout"

Set btn = Description.Create
btn("name").value = "Guests"

Set search = Description.Create
search("innertext").value = "Search"

Browser(br).Page(pg).WebEdit(where).Set "New Delhi, Delhi"

Browser(br).Page(pg).WebEdit(checkin).Set "05/10/2019"

Browser(br).Page(pg).WebEdit(checkout).Set "08/10/2019"

Browser(br).Page(pg).WebEdit(search).Click








