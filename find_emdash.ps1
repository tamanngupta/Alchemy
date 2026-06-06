$bytes = [System.IO.File]::ReadAllBytes('lesson6-2.html')
$content = [System.Text.Encoding]::UTF8.GetString($bytes)

# The em dash replacement turned " — " into "  -  " (double spaces).
# Fix: replace "  -  " with " - " throughout
$countBefore = ([regex]::Matches($content, '  -  ')).Count
Write-Host "Instances of double-spaced hyphens: $countBefore"

$content = $content.Replace('  -  ', ' - ')

$countAfter = ([regex]::Matches($content, '  -  ')).Count
Write-Host "After fix: $countAfter"

# Write back as UTF-8
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText('lesson6-2.html', $content, $utf8NoBom)
Write-Host "Done."
