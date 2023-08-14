import { Readable } from "node:stream";
import fetch from "node-fetch";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 5) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

async function uploadStream() {
  try {
    const response = await fetch("http://localhost:3334", {
      method: "POST",
      body: new OneToHundredStream(),
      duplex: true, // Include the duplex option
    }).then(response => {
        return response.text()
    }).then(data => {
        console.log(data)
    });

    console.log("Upload completed with status:", response.status);
  } catch (error) {
    console.error("Error uploading stream:", error);
  }
}

uploadStream();
