
Browser("Google").Page("Google").WebEdit("Search").Set "James Bond" @@ hightlight id_;_Browser("Google").Page("Google").WebEdit("Search")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Google").Page("Google").WebButton("Google Search").Click @@ hightlight id_;_Browser("Google").Page("Google").WebButton("Google Search")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Google").Page("James Bond - Google Search").Link("The Official James Bond").Click @@ hightlight id_;_Browser("Google").Page("James Bond - Google Search").Link("The Official James Bond")_;_script infofile_;_ZIP::ssf3.xml_;_
Wait(10)
Browser("Google").Page("The Official James Bond").Check CheckPoint("The Official James Bond 007 Website | Home") @@ hightlight id_;_Browser("Google").Page("The Official James Bond")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Google").Page("The Official James Bond").Sync @@ hightlight id_;_Browser("Google").Page("The Official James Bond")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Google").CloseAllTabs @@ hightlight id_;_132588_;_script infofile_;_ZIP::ssf6.xml_;_
