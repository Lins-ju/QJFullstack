package Persistence;

import Model.Question;
import Model.QuestionType;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class QuizDatastore extends QuestsData {

    //public int maxQuestsNum = new Random().nextInt();

    public QuizDatastore() {

    }

//    public int[] GenerateMinToMaxArray(int min, int max)
//    {
//        int[] numArray = new int[max - min + 1];
//
//        for(int i = min; i <= max; i++)
//        {
//            numArray[i] = min;
//            min++;
//        }
//
//        return numArray;
//    }

    public ArrayList<Question> getQuestionsByQuantity(ArrayList<Question> questions, int quantityOfQuestions) {
        ArrayList<Question> newQuestionsList = new ArrayList<Question>();

        for (int i = 0; i < quantityOfQuestions; i++) {
            newQuestionsList.add(questions.get(ThreadLocalRandom.current().nextInt(questions.size())));
        }

        return newQuestionsList;
    }

    public ArrayList<Question> getRandomSetOfQuestion(QuestionType type) {
        if (type == QuestionType.Geography) {
            Collections.shuffle(GeoTypeQuestions);
            return GeoTypeQuestions;
        }
        if (type == QuestionType.History) {
            int randomNum = ThreadLocalRandom.current().nextInt(0, HistTypeQuestions.size());
            Collections.shuffle(HistTypeQuestions);
            return HistTypeQuestions;
        }
        if (type == QuestionType.Biology) {
            int randomNum = ThreadLocalRandom.current().nextInt(0, BioTypeQuestions.size());
            return BioTypeQuestions;
        }
        if (type == QuestionType.Chemistry) {
            int randomNum = ThreadLocalRandom.current().nextInt(0, ChemTypeQuestions.size());
            return ChemTypeQuestions;
        }

        return new ArrayList<Question>();
    }

    public ArrayList<Question> getGeneralSetOfQuestions() {
        ArrayList<Question> GeneralQuestions = new ArrayList<Question>();

        getQuestionsByQuantity(GeoTypeQuestions, 2);

        GeneralQuestions.addAll(getQuestionsByQuantity(GeoTypeQuestions, 2));
        GeneralQuestions.addAll(getQuestionsByQuantity(HistTypeQuestions, 2));
        GeneralQuestions.addAll(getQuestionsByQuantity(BioTypeQuestions, 2));
        GeneralQuestions.addAll(getQuestionsByQuantity(ChemTypeQuestions, 2));

        Collections.shuffle(GeneralQuestions);

        return GeneralQuestions;
    }
}