#include <cs50.h>
#include <stdio.h>

const int N = 3;

float average(int length, int scores[]);

int main(void)
{
    int scores[N];

    for (int i = 0; i < N; i++)
    {
        scores[i] = get_int("scores: ");
    }

    printf("This is the average %f\n", average(N, scores));
}

float average(int length, int scores[])
{
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += scores[i];
    }

    return sum / (float) length;
}
