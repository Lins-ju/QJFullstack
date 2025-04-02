package org.springqj.qjartifact;

import Model.Question;
import Model.QuestionType;
import Persistence.QuizDatastore;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.util.ArrayList;

@SpringBootTest
class SpringQjApplicationTests {

    QuizDatastore _qDS = new QuizDatastore();

    @Test
    void getRandomQuestionWorks() {

        ArrayList<Question> questionsGeo = _qDS.getRandomSetOfQuestion(QuestionType.Geography);
        ArrayList<Question> questionsBio = _qDS.getRandomSetOfQuestion(QuestionType.Biology);
        ArrayList<Question> questionsHist = _qDS.getRandomSetOfQuestion(QuestionType.History);
        ArrayList<Question> questionsChem = _qDS.getRandomSetOfQuestion(QuestionType.Chemistry);

        boolean testResultGeo = questionsGeo.isEmpty();
        boolean testResultBio = questionsHist.isEmpty();
        boolean testResultHist = questionsBio.isEmpty();
        boolean testResultChem = questionsChem.isEmpty();

        Assert.isTrue(!testResultGeo, "Geo Result: ");
        Assert.isTrue(!testResultBio, "Bio Result: ");
        Assert.isTrue(!testResultHist, "Hist Result: ");
        Assert.isTrue(!testResultChem, "Chem Result: ");
    }

    @Test
    void getAllQuestionsWorks()
    {
        ArrayList<Question> genQuestionsResult = _qDS.getGeneralSetOfQuestions();

        boolean testResult = genQuestionsResult.size() == 8;

        Assert.isTrue(testResult, "Result: ");
    }

}
