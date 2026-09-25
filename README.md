# GitHub Pages 배포용 정적 웹사이트

이 저장소는 GitHub Pages에 바로 배포할 수 있는 정적 HTML/CSS/JS 프로젝트입니다.

## 배포 방법

1. GitHub 저장소를 생성하고 이 프로젝트를 연결합니다.
2. GitHub 저장소의 Settings > Pages로 이동합니다.
3. Source를 "GitHub Actions"로 선택합니다.
4. GitHub에 push 하면 자동으로 Pages가 배포됩니다.

## 로컬 확인

```bash
python -m http.server 8000
```

브라우저에서 http://localhost:8000 으로 접속하면 사이트를 확인할 수 있습니다.
