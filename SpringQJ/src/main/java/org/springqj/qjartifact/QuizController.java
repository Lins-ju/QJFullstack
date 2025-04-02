package org.springqj.qjartifact;

import Model.Question;
import Model.QuestionType;
import Persistence.QuizDatastore;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
public class QuizController {

    QuizDatastore quizDatastore;

    public QuizController() {
        quizDatastore = new QuizDatastore();
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Spring Boot!";
    }

    @GetMapping("/geoquest")
    public ArrayList<Question> RandomGeoQuestions() {

        return quizDatastore.getRandomSetOfQuestion(QuestionType.Geography);
    }

    @GetMapping("/histquest")
    public ArrayList<Question> RandomHistoryQuestions() {

        return quizDatastore.getRandomSetOfQuestion(QuestionType.History);
    }

    @GetMapping("/chemquest")
    public ArrayList<Question> RandomChemistryQuestions() {

        return quizDatastore.getRandomSetOfQuestion(QuestionType.Chemistry);
    }

    @GetMapping("/bioquest")
    public ArrayList<Question> RandomBiologyQuestions() {

        return quizDatastore.getRandomSetOfQuestion(QuestionType.Biology);
    }

    @GetMapping("/genquest")
    public ArrayList<Question> RandomGeneralQuestions() {

        return quizDatastore.getGeneralSetOfQuestions();
    }
}
