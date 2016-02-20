package run;

import spark.Spark;

public class WebApplication {

    public static void main(String[] args) {
        Spark.staticFileLocation("/ui/dist/");
        Spark.get("/hello", (req, res) -> "Hello World");
    }

}