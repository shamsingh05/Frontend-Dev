


let feedback = "Great product, Fast delivery and amazing sound quality!";

let wordCount = feedback.split(" ").length;

let hasNegativeWords =
    feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

if (!hasNegativeWords) {
    console.log("Feedback Summary:");
    console.log("Feedback:", feedback);
    console.log("Word Count:", wordCount);
    console.log("Status: Positive Feedback");
} else {
    console.log("Feedback Summary:");
    console.log("Feedback:", feedback);
    console.log("Word Count:", wordCount);
    console.log("Status: Needs Improvement");
}



