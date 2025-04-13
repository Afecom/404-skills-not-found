#include <cs50.h>
#include <ctype.h>
#include <math.h>
#include <stdio.h>
#include <string.h>

// Prototypes;
int letter_counter(string input);
int word_counter(string input);
int sentence_counter(string input);
void print_readability_grade(int num_letters, int num_words, int num_sentences);

// Constant Values;
const double LETTER_WEIGHT = 0.0588;
const double SENTENCE_WEIGHT = 0.296;
const double OFFSET = 15.8;

// Main Function;
int main(void)
{
    string text = get_string("Please provide a text: ");
    int letters = letter_counter(text);
    int words = word_counter(text);
    int sentence = sentence_counter(text);
    print_readability_grade(letters, words, sentence);
}

// count the number of letters;
int letter_counter(string input)
{
    int letter_counter = 0;
    int text_length = strlen(input);

    for (int letter_index = 0; letter_index < text_length; letter_index++)
    {
        if (isalpha(input[letter_index]))
        {
            letter_counter++;
        }
    }
    return letter_counter;
}

// Count the number of words;
int word_counter(string input)
{
    int word_counter = 1;
    int text_length = strlen(input);

    for (int word_index = 0; word_index < text_length; word_index++)
    {
        if (input[word_index] == ' ')
        {
            word_counter++;
        }
    }
    return word_counter;
}

// Count the number of sentences
int sentence_counter(string input)
{
    int sentence_counter = 0;
    int text_length = strlen(input);

    for (int sentence_index = 0; sentence_index < text_length; sentence_index++)
    {
        if (input[sentence_index] == '.' || input[sentence_index] == '!' ||
            input[sentence_index] == '?')
        {
            sentence_counter++;
        }
    }
    return sentence_counter;
}

// Execute the Coleman-Liau index algorithm;
void print_readability_grade(int num_letters, int num_words, int num_sentences)
{
    double L = ((float) num_letters / num_words) * 100;
    double S = ((float) num_sentences / num_words) * 100;
    double initial = LETTER_WEIGHT * L - SENTENCE_WEIGHT * S - OFFSET;
    int index = round(initial);

    printf("%i-letters, %i-words, %i-sentences, initial-%f, L-%f, S-%f, index-%i\n", num_letters,
           num_words, num_sentences, initial, L, S, index);

    if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (index >= 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %i\n", index);
    }
}
