1.What is the main functionality of the browser?
Ans - web browse shloud able to locate, retrieve and display content on www(world wibe web)
eg. google chrome, firefox

2.High Level Components of a browser
 ANS :   for diagram please find sc
    User Interface :
        It is space where user interact with browser.It includes address bar, home button,back and next button
        refresh button , bookmark icon etc.Evry other part except  where quested webpage is displayed.
    Browser Engine :
        It acts as a bridge beetween User Iterface and rendering engine. According to the inputs from various user interfaces, it queries and manipulates the rendering engine.
    Rendering Engine :
        It is resposnsible for render requested web page on the browser.It interprets html which is formated using css .It generates tha layout that  is displayed in User interface.
    Networking : 
            It retrives the url using common internet protocols like https, http,ftp. It handles all aspects of internet communication
            and security.It creates the cachse of retrive document in order to reduce traffic.
    JavaScript Interpreter  :
            It inerprets and execute js code which embede in browser.This result are send back to rendering engine for display.if script is external then teh resoirces is fetched from thet n/w .Parser keeps on hold until the script is executed.
    UI backend:
            It use for drowing basic widgets and window like combo box and windows .this backend expose generic interface which is not platform specific.
    Data platform/Storage:
        This is a persistance layer .browser supports storage mechanism such as localstorage,Index db,websql and 
        File system. Its is small databse creted on the local drive of compute where the browser is installed .It manages user data such as cookies, bookmark and prferences.
    
 3.Rendering engine and its use.
 ANS:
    Parsing Html to construct dom -->render tree construction-->layout of tree->painting the render tree
    It will parse chunks of html document and convert it in to DOM node in a tree called the "content tree" or DOM tree.It also parses CSS files as well.It always tries to display the contents as soosn as possible on screen .It does not wait for html parsing to complete .It parse and display the content it has recived from the network, while rest is still comming from the networks.

4.Parser
ANS:
    HTML/CSS-
        Html conten begining goes through process called Tokenization, tokenization is common process which in every programing language where code splits in to sevral tokens which heplful for parsing.This is where html parser understand where 
        the tag start ,where it ends,It child tag/node.HTMl tag start of top then followed by head tag which will be present before the HTMl tag ends and create the tree out of it.which is called parse tree or DOM tree
         eg.
            <html>
                <head></head>
                <body></body>
            </html>
        DOM tree use for getting document.getElementById or document.querySelector in JavaScript.

        CSS goes through a similar process where we have the CSS text and then the tokenization of CSS to eventually create something called a CSSOM or CSS Object Model.
5 & 7 .Script processor and Order of Script processor
ANS:
    There are basically three locations into which we can attach JavaScript:
    Directly into the head of the page:
        his means that any code inside the head and body of your page that is not inside a function or object will run as the page is loading — as soon as the page has loaded sufficiently to access that code.
    Directly into the body of the page :
        A code inside functions or objects is run whenever that function or object is called. If it is called from code that is directly in the head or body of the page, then its place in the execution order is effectively the point at which the function or object is called from the direct code.

    From an event handler/listener:
        Assigning a function to an event handler or listener does not result in the function being run at the point at which it is assigned — provided that you are actually assigning the function itself and not running the function and assigning the value returned

6.Tree construction
ANS:
    While DOM tree is beign constructed browser construct another tree ,the Render Tree.The tree is visual prsentation of element in which order they will displayed.It is visual repesentation of document.It is also called frames.

8.Layout and Painting
ANS:
    "Layout"-
       when the renderer is created and added to the tree ,it does not have position and size .the process of calculating these values is called layout process.It gives each nodes exact co-ordinates to appear on webpage.each node invokes the layout of methods of it's children that need layout.It happend aftre construction of render tree.

    "Painting" -
        After that render tree traverse and invoke/render's  the "paint()" method is called to display content on the screen.It uses UI backend layer