#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

void evaluator(string word1, string word2);

const int POINTS[] = {
    1, 3, 3, 2, 1, 4, 2, 4, 1, 8,
    5, 1, 3, 1, 1, 3, 10, 1, 1, 1,
    1, 4, 4, 8, 4, 10
};

int main(void)
{
    string word1 = get_string("player 1, please give me your word please: ");
    string word2 = get_string("player 2, please give me your word please: ");
    evaluator(word1, word2);
}

void evaluator(string word1, string word2)
{
    int score1 = 0;
    int score2 = 0;

    for (int i = 0, n = strlen(word1); i < n; i++)
    {
        char up = toupper(word1[i]);
        int index = up - 'A';
        score1 += POINTS[index];
    }

    for (int i = 0, n = strlen(word2); i < n; i++)
    {
        char up = toupper(word2[i]);
        int index = up - 'A';
        score2 += POINTS[index];
    }

    if (score1 > score2)
    {
        printf("Player 1 wins!\n");
    }
    else if (score1 < score2)
    {
        printf("Player 2 wins!\n");
    }
    else
    {
        printf("Tie!\n");
    }

}
