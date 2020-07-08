from django.shortcuts import render


def demo_list(request):
    return render(request, 'demo_list.html')