// using built in packages of node js
// 1) Buffer
// 2) OS
// 3) fs
// 4) path
// 5) util
// 6) url

//! 1) Buffer
const bufferDemo = () => {
    // Buffer is a global object in node js
    // Buffer is used to store binary data
    // Buffer is similar to array of integers but corresponds to a raw memory allocation outside the V8 heap

    // a)creating buffer
    const buf = Buffer.alloc(100); // Creating a new Buffer
    const len = buf.write("Hello world!"); // Writing to the Buffer and returns length
    console.log(len); // 12
    console.log("buf.toString()==> ",buf.toString()); // Hello world!

    //* b) Buffer.byteLength()
    // Returns the actual byte length of a string. This is not the same as String.prototype.length since that returns the number of characters in a string.
    const str = "Hello world!";
    const byteLength = Buffer.byteLength(str);
    console.log("Buffer.byteLength()==> ",byteLength); // 12

    //* c) Buffer.compare()
    // Compares buf with otherBuffer and returns a number indicating whether buf comes before or after or is the same as otherBuffer in sort order.
    const buf1 = Buffer.from("ABC");
    const buf2 = Buffer.from("BCD");
    const result = Buffer.compare(buf1, buf2);
    console.log("Buffer.compare()==> ",result);

    // * d) Buffer.concat()
    // Returns a new Buffer which is the result of concatenating all the Buffer instances in the list together.
    const buf3 = Buffer.from("Hello");
    const buf4 = Buffer.from("World");
    const buf5 = Buffer.concat([buf3, buf4]);
    console.log("Buffer.concat()==> ",buf5.toString()); // HelloWorld

    // * e) Buffer.entries()
    // Returns an iterator over buf values
      const buf6 = Buffer.from("Hello");
      console.log("Buffer.entries()==> ",buf6.entries()); // [ [ 0, 72 ], [ 1, 101 ], [ 2, 108 ], [ 3, 108 ], [ 4, 111 ] ]
      
    //   f) Buffer.fill()
    // Fills the Buffer with the specified value. If the offset is not given, the whole buffer will be filled. If the offset and end are given, the buffer will be filled from the offset to the end.
    const buf7 = Buffer.alloc(10);
    buf7.fill(5);
    console.log("Buffer.fill()==> ",buf7); // <Buffer 05 05 05 05 05 05 05 05 05 05>

    // * g) Buffer.from()
    // Creates a new Buffer containing the given JavaScript string str.
    const buf8 = Buffer.from("Hello");
    console.log("Buffer.from()==> ",buf8); // <Buffer 48 65 6c 6c 6f>


}
// bufferDemo();

//! 2) OS
const osDemo = () => {
    // os module provides a few basic operating-system related utility functions.
    // 1) os.arch()
    // Returns a string identifying the operating system CPU architecture for which the Node.js binary was compiled.
    const os = require("os");
    console.log("os.arch()==> ",os.arch()); // x64

    // 2) os.constants
    // Returns an object containing commonly used operating system-specific constants.
    console.log("os.constants==>",os.constants); // { UV_UDP_REUSEADDR: 4, ... }

    // 3) os.cpus()
    // Returns an array of objects containing information about each logical CPU core.
    console.log("os.cpus()==>",os.cpus()); // [ { model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz', ... }, ... ]

   

    // 4) os.freemem()
    // Returns the amount of free system memory in bytes as an integer.
    console.log("os.freemem()==>",os.freemem()); // 10485760

    // 5) os.homedir()
    // Returns the home directory of the current user as a string.
    console.log("os.homedir()==>",os.homedir()); // C:\Users\HP

    // 6) os.hostname()
    // Returns the hostname of the operating system as a string.
    console.log("os.hostname()==>",os.hostname()); // DESKTOP-2B5G5L8

    

    // 7) os.networkInterfaces()
    // Returns an object containing network interfaces that have been assigned a network address.
    console.log("os.networkInterfaces()==>",os.networkInterfaces()); // { 'Loopback Pseudo-Interface 1': ... }

    // 8) os.platform()
    // Returns a string identifying the operating system platform.
    console.log("os.platform()==>",os.platform()); // win32
}
// osDemo();

//! 3) fs
const fsDemo = () => {
    // fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
    // 1) fs.access()
    // Tests a user's permissions for the file or directory specified by path.
    const fs = require("fs");
    fs.access("./data/text.js", fs.constants.F_OK, (err) => {
        console.log("fs.access()==>",err ? "no access!" : "can read/write");
    }); // can read/write

    // 2) fs.appendFile()
    // Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a Buffer.
    fs.appendFile("./data/test.txt", "data to append", (err) => {
        if (err) throw err;
        console.log("fs.appendFile()==> The 'data to append' was appended to file!");
    }); // The 'data to append' was appended to file!

    // 3) fs.chmod()
    // Asynchronously changes the permissions of a file.
    fs.chmod("./data/permission.txt", 0o777, (err) => {
        if (err) throw err;
        console.log("fs.chmod()==> Changed permissions!");
    }); // Changed permissions!

    // 4) fs.chown()
    // Asynchronously changes the owner and group of a file.
    fs.chown("./data/permission.txt", 1000, 1000, (err) => {
        if (err) throw err;
        console.log("fs.chown()==> Changed ownership!");
    }); // Changed ownership!

    // 5) fs.copyFile()
    // Asynchronously copies src to dest. By default, dest is overwritten if it already exists.
    fs.copyFile("./data/permission.txt", "./data/permission2.txt", (err) => {
        if (err) throw err;
        console.log("fs.copyFile()==> Copied!");
    }); // Copied!

    // 6) fs.createReadStream()
    // Returns a new ReadStream object (See Readable Stream).
    const readStream = fs.createReadStream("./data/permission.txt");
    readStream.on("open", () => {
        console.log("fs.createReadStream()==> The file is open");
    }); // The file is open

}
// fsDemo();

//! 4) path
const pathDemo = () => {
    // path module provides utilities for working with file and directory paths.
    // 1) path.basename()
    // Returns the last portion of a path, similar to the Unix basename command.
    const path = require("path");
    console.log("path.basename()==>",path.basename("C:\\temp\\myfile.html")); // myfile.html

    // 2) path.delimiter
    // Returns the platform-specific path delimiter, ; or :.
    console.log("path.delimiter==>",path.delimiter); // ;

    // 3) path.dirname()
    // Returns the directory name of a path, similar to the Unix dirname command.
    console.log("path.dirname()==>",path.dirname("C:\\temp\\myfile.html")); // C:\temp

    // 4) path.extname()
    // Returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path.
    console.log("path.extname()==>",path.extname("C:\\temp\\myfile.html")); // .html

    // 5) path.format()
    // Returns a path string from an object.
    const pathObject = {
        root: "/ignored",
        dir: "/home/user/dir",
        base: "file.txt",
    };
    console.log("path.format()==>",path.format(pathObject)); // /home/user/dir/file.txt

    // 6) path.isAbsolute()
    // Determines whether path is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
    console.log("path.isAbsolute()==>",path.isAbsolute("/foo/bar")); // true
    console.log("path.isAbsolute()==>",path.isAbsolute("/baz/..")); // true
    console.log("path.isAbsolute()==>",path.isAbsolute("qux/")); // false
    console.log("path.isAbsolute()==>",path.isAbsolute(".")); // false

    // 7) path.join()
    // Join all arguments together and normalize the resulting path.
    console.log("path.join()==>",path.join("/foo", "bar", "baz/asdf", "quux", "..")); // /foo/bar/baz/asdf

    // 8) path.normalize()
    // Normalize a string path, taking care of .. and . parts.
    console.log("path.normalize()==>",path.normalize("C:\\temp\\\\foo\\bar\\..\\"));
}

// pathDemo();

//! 5) util
const utilDemo = () => {
    // util module is primarily designed to support the needs of Node.js' own internal APIs. However, many of the utilities are useful for application and module developers as well.
    // 1) util.deprecate()
    // Marks that a method should not be used.
    const util = require("util");
    const helloPluto = util.deprecate(() => {
        console.log("hello pluto");
    }, "pluto is deprecated. It is not a planet anymore.");
    helloPluto(); // hello pluto

    // 2) util.format()
    // Returns a formatted string using the first argument as a printf-like format.
    console.log("util.format()==>",util.format("%s:%s", "foo", "bar", "baz")); // foo:bar baz

    
    // 3) util.promisify()
    // Returns a function that wraps original in a Promise.
    const fs = require("fs");
    const readfile = util.promisify(fs.readFile);

    readfile("./data/permission.txt", "utf8")
        .then((data) => {
            console.log("util.promisify()==>",data);
        }
    ); // This is a permission file.

    // 4) util.error()
    // This method is deprecated. Use console.error() instead.
    util.error("This is an util error message");

    // 5) util.log()
    // This method is deprecated. Use console.log() instead.
    util.log("This is an util log message");

    // 6) util.isDate()
    // Returns true if the given "object" is a Date.
    console.log("util.isDate()==>",util.isDate(new Date())); // true

}
// utilDemo();

// 6) url
const urlDemo = () => {
    // url module provides utilities for URL resolution and parsing.
    // 1) url.format()
    // Takes a parsed URL object, and returns a formatted URL string.
    const url = require("url");
    const myURL = new URL("https://example.org/foo");
    console.log("url.format()==>",url.format(myURL)); // https://example.org/foo

    // 2) url.parse()
    // Takes a URL string, and returns an object.
    const myURL2 = url.parse("https://example.org/foo");
    console.log("url.parse()==>",myURL2); // Url {
    //     protocol: 'https:',
    //     slashes: true,
    //     auth: null,
    //     host: 'example.org',
    //     port: null,
    //     hostname: 'example.org',
    //     hash: null,
    //     search: null,
    //     query: null,
    //     pathname: '/foo',
    //     path: '/foo',
    //     href: 'https://example.org/foo'
    //   }

    // 3) url.resolve()
    // Resolves to to an absolute URL.
    console.log("url.resolve()==>",url.resolve("https://example.com/", "/one")); // https://example.com/one
    console.log("url.resolve()==>",url.resolve("https://example.com/one", "/two")); // https://example.com/two
}
// urlDemo();


// my package
const myPackage = ()=>{
    const cal = require("@riyank786/calculator-module");
    console.log("calculator.add()==>",cal.calculate(1,2,'+')); // 3
    console.log("calculator.sub()==>",cal.calculate(1,2,'-')); // -1
}

// myPackage();
